<template>
    <v-main class="px-0 mx-0 pt-5">
        <v-container fluid class="px-0 pt-5 mt-5 py-0">
            <v-row justify="center" align="center" class="pt-10">
                <v-col md="11" lg="10" sm="11" xs="12" class="pt-15 pb-14">
                    <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
                        <v-row align="center" class="py-0 my-0">
                            <v-col sm="12" md="6" col="12" class="pr-15">
                                <div class="d-none d-sm-none d-md-block mb-10">
                                    <p class="h1-heading">Detección de Objetos</p>
                                    <p class="google-font" style="font-size: 18px;">
                                        Con TensorFlow.js podemos implementar nuestros modelos de Machine Learning en los navegadores para que esten disponibles para todo el mundo.
                                        <br>
                                        En esta demo, usted podrá probar un famoso modelo para detección de objetos conocido como MobilNet, que es muy eficiente para aplicaciones de visión móviles e integradas.
                                    </p>
                                </div>
                                <div>
                                    <v-btn rounded color="#1976d2" dark elevation="0" class="pt-5 pb-5 pl-5 pr-5" style="font-family:google-sans; text-transform: capitalize;" v-on:click="play()">
                                        <v-icon dark class="mr-2">
                                            mdi-play
                                        </v-icon>
                                        Encender cámara
                                    </v-btn>
                                    <v-btn rounded outlined color="#1976d2" dark elevation="0" class="pt-5 pb-5 pl-5 pr-5 ml-5" style="font-family:google-sans; text-transform: capitalize;" v-on:click="stop()">
                                        <v-icon class="mr-2">
                                            mdi-stop
                                        </v-icon>
                                        Apagar cámara
                                    </v-btn>
                                </div>
                                <div class="pt-10">
                                    <label class="google-font mb-5" style="font-size: 110%">Modelos Disponibles</label>
                                    <br>
                                    <div class="pt-5">
                                        <v-btn-toggle
                                            v-model="modelConfig.base"
                                            @change="loadModelAndStartDetecting"
                                            rounded
                                            caret-color="rgb(43,129,214)"
                                            color="primary"
                                            style="color:rgb(43,129, 214); caret-color: rgb(43,129,214);"
                                        >
                                            <v-btn
                                                v-for="modelName in selectableModels"
                                                :key="modelName"
                                                :value="modelName"
                                            >
                                                {{ modelName }}
                                            </v-btn>
                                        </v-btn-toggle>
                                    </div>
                                </div>
                                <div class="pt-5">
                                    <span style="color:red;">* </span> Para poder visualizar la detección de objetos debes de seleccionar un modelo
                                </div>
                            </v-col>
                            <v-col sm="12" md="6" col="12" class="text-center py-md-10 py-5" style="background: rgb(205,223,253); border-radius: 18px;">

                                <div id="TensorFlowjs" style="width: 640px; height: 450px">
                                    <div class="resultFrame" align="center" justify="center">
                                        <video ref="video" autoplay class="ml-8"></video>
                                        <canvas ref="canvas" :width="resultWidth" :height="resultHeight" class="ml-8"></canvas>
                                    </div>
                                </div>  
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
import * as cocoSsd from '@tensorflow-models/coco-ssd'

export default {
    name:"TensorFlowjs",
    data () {
        return {
            streamPromise: null,
            modelPromise: null,

            isVideoStreamReady: false,
            isModelReady: false,
            initFailMessage: '',

            video: {},

            model: null,
            modelConfig: {
                base: 'lite_mobilenet_v2'
            },
            selectableModels: ['lite_mobilenet_v2', 'mobilenet_v1', 'mobilenet_v2'],

            videoRatio: 1,
            resultWidth: 0,
            resultHeight: 0
        }
    },
    methods: {
        play() {
            this.streamPromise = this.initWebcamStream()
            this.loadModelAndStartDetecting()
        },
        stop() {
            this.video = this.$refs.video;
            this.video.srcObject.getTracks().forEach(function(track) {
                track.stop();
            });
        },
        async initWebcamStream(){
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                return navigator.mediaDevices.getUserMedia({
                audio: false, 
                video: { facingMode: 'environment' } 
                })
                .then(stream => {
                    const video = this.$refs.video
                    try {
                    video.srcObject = stream
                    } catch (error) {
                    video.src = URL.createObjectURL(stream)
                    }
                    return new Promise((resolve, reject) => {
                    video.onloadedmetadata = () => {
                        this.videoRatio = video.offsetHeight / video.offsetWidth
                        window.addEventListener('resize', this.setResultSize)
                        this.setResultSize()
                        this.isVideoStreamReady = true
                        console.log('webcam stream initialized')
                        resolve()
                    }
                    })
                })
                .catch(error => {
                    console.log('failed to initialize webcam stream', error)
                    throw (error)
                })
            } else {
                return Promise.reject(new Error('Your browser does not support mediaDevices.getUserMedia API'))
            }
        },
        setResultSize(){
            const clienWidth = document.documentElement.clientWidth
            this.resultWidth = Math.min(600, clienWidth)
            this.resultHeight = this.resultWidth * this.videoRatio
            const video = this.$refs.video
            video.width = this.resultWidth
            video.height = this.resultHeight
        },
        async loadModel(){
            if (this.model) this.model.dispose()
            return cocoSsd.load(this.modelConfig)
                .then(model => {
                    this.model = model
                    console.log('Cargo el modelo :D')
                })
                .catch((error) => {
                    console.log('no cargo pipipi', error)
                    throw (error)
                })
        },
        async detectObjects () {
            const predictions = await this.model.detect(this.$refs.video)
            this.renderPrendictions(predictions)
            requestAnimationFrame( () => {
                this.detectObjects()
            })
        },
        loadModelAndStartDetecting() {
            this.modelPromise = this.loadModel()
            Promise.all([ this.streamPromise, this.modelPromise])
                .then(() => {
                    this.detectObjects()
                }) .catch((error) => {
                    console.log('hubo un error')
                    this.initFailMessage = error
                })
        },
        renderPrendictions (predictions) {
            const ctx = this.$refs.canvas.getContext('2d')
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
            predictions.forEach(prediction => {
                const x = prediction.bbox[0]
                const y = prediction.bbox[1]
                const width = prediction.bbox[2]
                const height = prediction.bbox[3]
                // Dibujar el cuadrado
                ctx.strokeStyle = 'rgb(25,118,210)'
                ctx.lineWidth = 4
                ctx.strokeRect(x, y, width, height)
                
                // Dibujar el background de la etiqueta
                ctx.fillStyle = 'rgb(25,118,210)'
                ctx.font = '24px google-sans bold'
                ctx.fillText(
                    `${(prediction.score * 100).toFixed(1)}% ${prediction.class}`,
                    prediction.bbox[0],
                    prediction.bbox[1] + 20)
            })
        }
    },
}

</script>


<style lang="scss">
.h1-heading{
    font-family: google-sans;
    font-size:40px;
    font-weight: 600;
}
.resultFrame {
  display: grid;

  video {
    grid-area: 1 / 1 / 1 / 1;
  }
  canvas {
    grid-area: 1 / 1 / 1 / 1;
  }
}
</style>