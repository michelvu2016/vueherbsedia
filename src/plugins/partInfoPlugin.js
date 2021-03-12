
export const PartInfoPlugin = {
    install: (app, options) => {
        console.log(">>>Install plugin");
        app.config.globalProperties.$partDescription = (partcode) => {
            console.log(">>>Plugin invoked with:", partcode)
            return options[partcode]?.description
        }
    }
}
