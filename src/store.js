import { reactive } from "vue";

export const store = reactive({
    //Dati per la generaziona dinamica della sezione "get a consult"
    consul:[
        {
            category: "Business Growth",
            title:"Increased Brand Awareness",
            info:"Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
        },
        {
            category: "Investors In Peolpe",
            title:"In-House sales Training",
            info:"Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
        },
        {
            category: "Social Media Analysis",
            title:"Harness Your Social Proof",
            info:"Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
        },
    ],
    //Dati per la generazione dinamica della sezione "brand collab"
    brandIcon: [
        {
            img: '/src/assets/img/brands/abstract.png',
            brand: "abstract",
        },
        {
            img: '/src/assets/img/brands/cglobal.png',
            brand: "cglobal",
        },
        {   
            img: '/src/assets/img/brands/next.png',
            brand: "next",
        },
        {
            img: '/src/assets/img/brands/hemisferio.png',
            brand: "hemisferio",
        },
        {
            img: '/src/assets/img/brands/spaces.png',
            brand: "spaces",
        },
        {
            img: '/src/assets/img/brands/digitalbox.png',
            spaces: "digitalbox",
        },
    ],
});