<template>
  <div>
    <h1>&mdash; Flytrap</h1>
  </div>
</template>

<style lang="stylus" scoped>
  div
    align-items flex-end
    display flex
    flex-direction column-reverse
    min-height 100vh

  h1
    font-family Caveat, sans-serif
    font-size 40px
    font-weight normal
    margin 30px 40px

  @media only screen and (max-device-width: 420px)
    div
      min-height calc(100vh - 60px)  // url/button bars in mobile safari
</style>

<script>
  export default {
    head: {
      title: 'Flytrap',
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Caveat'},
      ],
    },
  };
</script>
