<template>
    <v-main class="px-0 mx-0 pt-5">
        <v-container fluid class="px-0 pt-5 mt-5 py-0">
            <v-row justify="center" align="center" class="pt-10">
                <v-col md="11" lg="10" sm="11" xs="12" class="pt-15 pb-14">
                    <v-container fluid class="py-0 my-0 mt-2 mb-5" style="padding-left: 7%; padding-right:7%">
                        <v-row align="center" class="py-0 my-0">
                            <v-col sm="12" md="6" col="12" class="pr-15">
                                <p class="h1-heading">Convertir Markdown a HTML</p>
                                <div class="editorMark">
                                     <v-textarea
                                        outlined
                                        dense
                                        auto-grow
                                        autofocus
                                        @keyup="convert"
                                        v-model="markdown"
                                        label="Markdown"
                                    >
                                    </v-textarea>
                                </div>
                            </v-col>
                            <v-col sm="12" md="6" col="12" class="py-md-10 py-5">
                                <div style="max-width: 200px;">
                                    <div class="google-sans output" v-html="converted"></div>
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
import snarkdown from 'snarkdown';

export default {
    name: 'Markdown2html',
    data () {
        return {
            markdown: null,
            converted: null
        }
    },
    methods:{
        snarkdownEnhanced(markdown) {
            return markdown 
                .split(/(?:\r?\n){2,}/)
                .map((l) =>
                    [" ", "\t", "#", "-", "*", ">"].some((char) => l.startsWith(char))
                        ? snarkdown(l)
                        : `<p>${snarkdown(l)}</p>`
                )
                .join("\n");
        },
        convert(event) {     
            const markdown = event.target.value;
            this.markdown = markdown;
            const converted = this.snarkdownEnhanced(markdown);
            this.converted = converted;  
        },
        recoveryData(){
            this.markdown = localStorage.getItem('markdown');
            this.converted = localStorage.getItem('converted');
        }
    }
}
</script>


<style>


#editor {
  display: grid;
  gap: 40px;
  
}
#editor h1,
#editor h2,
#editor h3,
#editor h4,
#editor h5 {
  margin-block-end: 8px;
}

.ouput {
    line-height: 1.5;
    margin-block-end: 12px;
}
.h1-heading{
    font-family: google-sans;
    font-size:40px;
    font-weight: 600;
}
</style>


