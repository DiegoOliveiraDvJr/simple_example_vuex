<template>
    <div class="Form w-100 h-100 d-flex flex-column  align-items-center">
        <h1>{{ $store.state.user.first_name }} {{ $store.state.user.last_name }}</h1>

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
export default {
    name: 'Formulario',
    data() {
        return {
            
        }
    },
    computed: {
        firstName: {
            get() {
                return this.$store.state.user.first_name;
            },
            set(value) {
                this.$store.commit('saveFirstName', value);
            }
        },
        lastName: {
            get() {
                return this.$store.state.user.last_name;
            },
            set(value) {
                this.$store.commit('saveLastName', value);
            }
        }
    },
    methods: {
      saveName(){
        //action
        this.$store.commit('saveFirstName', this.myName);

        //mutation
        //this.$store.commit()
      }
    }
}
</script>
<style scoped>

</style>