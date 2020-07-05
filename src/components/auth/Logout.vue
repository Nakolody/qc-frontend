<template>
    <div>
        Loading
    </div>
</template>

<script>
export default {
    created() {
        this.$http.get('/logout')
            .then(() => {
                this.$router.push('login')
            }).catch((error) => {
                console.log(error.response)
            })
    }
}
</script>