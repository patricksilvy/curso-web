<template>
    <v-container fluid class="home">
        <v-form>
            <v-file-input label="Selecione as legendas" prepend-icon="mdi-message-text" append-icon="mdi-send" multiple
                single-line v-model="files" @click:append="processSubtitles">
            </v-file-input>
        </v-form>

        <div class="pills">
            <PillComponent v-for="item in groupedWords" :word="item.word" :amount="item.amount" :key="item.word" />
        </div>
    </v-container>
</template>

<script>
import PillComponent from './PillComponent.vue';
import { ipcRenderer } from 'electron';

export default {
    components: {
        PillComponent
    },
    data: function () {
        return {
            files: [],
            groupedWords: [],
        }
    },
    methods: {
        processSubtitles() {
            let paths = this.files.map( f => f.path ) 
            ipcRenderer.send("process-subtitles", paths)
            ipcRenderer.on("process-subtitles", (event, resp) => {
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style scoped>
.pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>