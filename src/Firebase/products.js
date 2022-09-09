export const pharmacies = [
    {
        name: "Legon Pharmacy",
        pharmacy_id: "legonpharmacy12",
        location: "east legon",
        working_days: "Monday - Friday",
        working_hours: "8am - 10pm",
        hasDispatch: true,
        contact: "02984729487",
    },
    {
        name: "Savior Herbal Clinic",
        pharmacy_id: "shc321",
        location: "teshie",
        working_days: "Monday - Friday",
        working_hours: "8am - 10pm",
        hasDispatch: true,
        contact: "897264283",
    },
    {
        name: "Grace pharmaceuticals",
        pharmacy_id: "gracep3424",
        location: "east legon",
        working_days: "Monday - Sunday",
        working_hours: "24hr",
        hasDispatch: false,
        contact: "02984729487",
    },
];

export const products = [
    {
        manufacturer_name: "Enerst Chemist",
        brand_name: "Paracetamol",
        product_id: "enerst_paracetamol_12",
        price: "3.50",
        Description: "headache pain cure",
        usage: ["Adults 20ml twice a day", "Children 10ml per day"],
        dosage: {
            tablet: true,
            capsule: false,
            syrup: false,
        },
        imageUrl: {
            small:
                "https://ernestchemists.com/wp-content/uploads/2019/05/fluxamox-150x150.png",
            medium:
                "https://ernestchemists.com/wp-content/uploads/2019/05/fluxamox-150x150.png",
            large:
                "https://ernestchemists.com/wp-content/uploads/2019/05/fluxamox-150x150.png",
        },
        pharmacy_ids: ["legonpharmacy12", "gracep3424"],
        category: "Cosmetics",
    },
    {
        manufacturer_name: "Enerst Chemist",
        brand_name: "dagamol",
        product_id: "enerst_dagamol_2",
        price: "10.50",
        Description: "stomach pain cure",
        usage: ["Adults above 21 20ml twice a day", "Not suitable for Children"],
        dosage: {
            tablet: false,
            capsule: true,
            syrup: false,
        },
        imageUrl: {
            small:
                "https://ernestchemists.com/wp-content/uploads/2019/05/Enacef-500.jpg",
            medium:
                "https://ernestchemists.com/wp-content/uploads/2019/05/Enacef-500.jpg",
            large:
                "https://ernestchemists.com/wp-content/uploads/2019/05/Enacef-500.jpg",
        },
        pharmacy_ids: ["legonpharmacy12", "shc321"],
        category: "Baby",
    },
    {
        manufacturer_name: "OA & J PHARMACUTICALS LTD",
        brand_name: "FOXITIL",
        product_id: "oafox234",
        price: "12.00",
        Description: "headache pain cure",
        usage: ["Adults 20ml twice a day", "Children 10ml per day"],
        dosage: {
            tablet: true,
            capsule: false,
            syrup: false,
        },
        imageUrl: {
            small: "",
            medium: "",
            large: "",
        },
        pharmacy_ids: ["shc321", "legonpharmacy12"],
        category: "Cosmetics",
    },
    {
        manufacturer_name: "HOFFMAN LA ROCHE GHANA LTD",
        brand_name: "ROCEPHIN",
        product_id: "hoffroceph23",
        price: "3.50",
        Description: "headache pain cure",
        usage: ["Adults 20ml twice a day", "Children 10ml per day"],
        dosage: {
            tablet: true,
            capsule: true,
            syrup: false,
        },
        imageUrl: {
            small:
                "https://ernestchemists.com/wp-content/uploads/2019/05/zymax-250.jpg",
            medium:
                "https://ernestchemists.com/wp-content/uploads/2019/05/zymax-250.jpg",
            large:
                "https://ernestchemists.com/wp-content/uploads/2019/05/zymax-250.jpg",
        },
        pharmacy_ids: ["legonpharmacy12", "gracep3424", "shc321"],
        category: "Covid",
    },
    {
        manufacturer_name: "ATOZ PHERMACEUTICALS PVT LTD",
        brand_name: "INOXIME-200 TABLETS",
        product_id: "enerst_paracetamol_12",
        price: "3.50",
        Description:
            "To purchase Advaxone (Ceftriaxone) 1g Injection 1s , you must have a prescription from your doctor or medical professional.",
        usage: ["Adults 20ml twice a day", "Children 10ml per day"],
        dosage: {
            tablet: true,
            capsule: false,
            syrup: true,
        },
        imageUrl: {
            small:
                "https://ernestchemists.com/wp-content/uploads/2019/07/enamycin.jpg",
            medium:
                "https://ernestchemists.com/wp-content/uploads/2019/07/enamycin.jpg",
            large:
                "https://ernestchemists.com/wp-content/uploads/2019/07/enamycin.jpg",
        },
        pharmacy_ids: ["gracep3424", "shc321"],
        category: "Baby",
    },
];

export const orders = [
    {
        product_id: "hoffroceph23",
        quantity: 3,
        status: {
            completed: false,
            reservation: false,
            cancelled: false
        },
        user_details: {
            name: "Gates Vert",
            email: "gatesvert@gmail.com",
            tel: "0254015475",
            location: "Dansoma",
            isDelivery: true
        }
    },
    {
        product_id: "enerst_dagamol_2",
        quantity: 3,
        status: {
            completed: true,
            reservation: false,
            cancelled: false
        },
        user_details: {
            name: "Gates Vert",
            email: "gatesvert@gmail.com",
            tel: "0254015475",
            location: "Dansoma",
            isDelivery: true
        }
    },
    {
        product_id: "enerst_paracetamol_12",
        quantity: 3,
        status: {
            completed: false,
            reservation: true,
            cancelled: false
        },
        user_details: {
            name: "Gates Vert",
            email: "gatesvert@gmail.com",
            tel: "0254015475",
            location: "Dansoma",
            isDelivery: true
        }
    },
    {
        product_id: "oafox234",
        quantity: 3,
        status: {
            completed: false,
            reservation: false,
            cancelled: true
        },
        isDelivery: true,
        user_details: {
            name: "Gates Vert",
            email: "gatesvert@gmail.com",
            tel: "0254015475",
            location: "Dansoma",
        }
    },
]
