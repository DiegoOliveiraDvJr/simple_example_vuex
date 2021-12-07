<template>
    <div class="Form w-100 h-100 d-flex flex-column  align-items-center">
        <h1>{{ fullName }}</h1>

        <form>
            <div class="mb-3">
                <label class="form-label">Primeiro Nome</label>
                <input type="text" class="form-control" v-model="firstName">
            </div>
            <div class="mb-3">
                <label class="form-label">Sobrenome</label>
                <input type="text" class="form-control" v-model="lastName">
            </div>
            <button @click.prevent="saveName" type="submit" class="btn btn-primary" v-if="false">Save</button>
        </form>
        
    </div>
    
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    name: 'Formulario',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['fullName']),
        ...mapState({
            user: state => state.user
        }),
        firstName: {
            get() {
                return this.user.first_name;
            },
            set(value) {
                this.SAVE_FIRST_NAME(value);
            }
        },
        lastName: {
            get() {
                return this.user.last_name;
            },
            set(value) {
                this.SAVE_LAST_NAME(value);
            }
        }
    },
    methods: {
        ...mapMutations(['SAVE_FIRST_NAME', 'SAVE_LAST_NAME']),
      saveName(){
        //action
        this.SAVE_FIRST_NAME(this.myName);

        //mutation
        //this.$store.commit()
      }
    }
}
</script>
<style scoped>

</style>