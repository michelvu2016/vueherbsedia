<template>
    <div class="container">
        <header class="header">
            <div class='logo'>Healthy Living</div>
            <div class="navbar">
                <slot name="menubar"></slot>
            </div>
            <div class="headline">Living a heelthy life requires some dedication and consistency</div>
            
        </header>
        <nav class="side-bar">
            <div class="side-bar-container">
                <ul>
                    <div>Dandelion</div>
                    <li>Excelent tonic for digestion</li>
                </ul>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam provident ratione hic vitae cumque doloremque laudantium ullam suscipit nesciunt tempora veniam autem culpa dicta assumenda, placeat accusamus quia! Numquam?</div>
            </div>
        </nav>
        <main class="main">
            <div>
                <slot name="main"></slot>
            </div>
            
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
            <div class="copy-right">Copyright Michel Vu 2021-2022</div>
        </footer>
    </div>

</template>
<script>
export default {
    name: "DreamngTheme",
    props: ['title']
}
</script>
<style scoped>
    .container {
        margin: 0;
        padding: 0;
        width: 65%;
        height: calc(100vh - 5px);
        background-color: antiquewhite;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 20% 70% 10%;
        grid-template-columns: repeat(12, 1fr) ;
        justify-items: start;
        align-items: start;
        gap: 10px;

    }
  .header {
      background-image: url('../../assets/rainyscene.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;
      position: relative;
      grid-column-start: 1;
      grid-column-end: 13;
      display: grid;
      grid-template: 40% auto 2rem / repeat(12, 1fr);
   }
   .logo {
       margin: 15px 0 0 20px;
       font-size: 30px;
   }
   .headline {
       grid-row-start: 2;
       grid-row-end: 3;
       grid-column-start: 4;
       grid-column-end: 9;
       color: white;
       font-size: 1.5em;

   }
   .navbar {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top,rgba(187, 241, 223, .9), rgba(187, 241, 223, .1));
        display: flex;
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 3;
        grid-row-end: 4;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;
        box-sizing: border-box;
   }
   .side-bar {
       grid-column-start: 1;
       grid-column-end: 3;
       background-image: linear-gradient(to right, rgba(107, 107, 112, .6), white);
       grid-row-start: 2;
        grid-row-end: 4;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        height: 100%;
        box-sizing: border-box;
   }
   .side-bar-container {
       width: 100%;
       height: 100%;
       padding: 8px;
       box-sizing: border-box;
       align-self: stretch;
   }

   .main {
       grid-column-start: 3;
       grid-column-end: 13;
   }
   .copy-right {
       font-size: 9pt;
       color: rgba(9, 67, 117, 0.8);
       position: absolute;
       top: calc(100vh - 20px);
       padding-left: 20px;
   }
   footer {
       grid-column-start: 3;
       grid-column-end: 13;
       
   }
</style>