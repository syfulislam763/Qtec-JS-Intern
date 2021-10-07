
//fake data
const products = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNgNNM2AYCxvHpsSrpHwifuZhCIghwrGlKdR9K1Fh70i5ffNoJtwGsuIBsHeHQZ5dBzE&usqp=CAU",
        title: "Solid Color",
        description: "",
        price: 20,
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLPhb3Lxepa9aYqgoDILmhxryQhEpSO0oiic0DkwAZ4tDsJyjcyuFaypjFLnoqovp3Z4&usqp=CAU",
        title: "Striped",
        description: "",
        price: 30,
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7NA6PIDEdg-c_Hj1x2PW2TJ8JRh5RQcTk5IXZua9fyleqb-9fPYL7JFzfPO20PsOmWk&usqp=CAU",
        title: "Letter",
        description: "",
        price: 35,
    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNgNNM2AYCxvHpsSrpHwifuZhCIghwrGlKdR9K1Fh70i5ffNoJtwGsuIBsHeHQZ5dBzE&usqp=CAU",
        title: "Short Sleeve",
        description: "",
        price: 40,
    },
    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq154_S8c2ffwWp8hHbGQwyktVDVP210NtfnL_XnvpA_EtfSuJ5FhG5Wl1AyIsbfE2Oc&usqp=CAU",
        title: "Polo",
        description: "",
        price: 45,
    },
    {
        id: 6,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVm0lVRInFy59vGtK0Dp6SYIxRo_q_tojzOnNCxVOLH8kVQWWxitEfUnQyvAMzYOW1rU&usqp=CAU",
        title: "Vintage Style",
        description: "",
        price: 50,
    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNG0TrVVgZ-RoTy2M0SCe0psMn_J_UktlotsCU4u_Ied_wNbCet6TotopZdeLouDruMyw&usqp=CAU",
        title: "Long Sleeve",
        description: "",
        price: 15,
    },
    {
        id: 8,
        img: "https://cdn.shopify.com/s/files/1/0359/8444/1481/products/DJxTTS_TSHIRT-FRONT2_800x.jpg?v=1626184108",
        title: "Cotton Soft Plain",
        description: "",
        price: 25,
    },
    {
        id: 9,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-6mSlOYizj7TL4CeOu15TxSmwTvF-AMqqQ&usqp=CAU",
        title: "Ring Spun Cotton",
        description: "",
        price: 60,
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        title: "Casual Cotton",
        description: "",
        price: 65,
    },
    {
        id: 11,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNgNNM2AYCxvHpsSrpHwifuZhCIghwrGlKdR9K1Fh70i5ffNoJtwGsuIBsHeHQZ5dBzE&usqp=CAU",
        title: "Solid Color",
        description: "",
        price: 20,
    },
    {
        id: 12,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLPhb3Lxepa9aYqgoDILmhxryQhEpSO0oiic0DkwAZ4tDsJyjcyuFaypjFLnoqovp3Z4&usqp=CAU",
        title: "Striped",
        description: "",
        price: 30,
    },
    {
        id: 13,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7NA6PIDEdg-c_Hj1x2PW2TJ8JRh5RQcTk5IXZua9fyleqb-9fPYL7JFzfPO20PsOmWk&usqp=CAU",
        title: "Letter",
        description: "",
        price: 35,
    },
    {
        id: 14,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNgNNM2AYCxvHpsSrpHwifuZhCIghwrGlKdR9K1Fh70i5ffNoJtwGsuIBsHeHQZ5dBzE&usqp=CAU",
        title: "Short Sleeve",
        description: "",
        price: 40,
    },
    {
        id: 15,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq154_S8c2ffwWp8hHbGQwyktVDVP210NtfnL_XnvpA_EtfSuJ5FhG5Wl1AyIsbfE2Oc&usqp=CAU",
        title: "Polo",
        description: "",
        price: 45,
    },
]




class App {
    constructor(products = []) {
        this.productsContainer = document.querySelector('.products-container');
        this.ordersContainer = document.querySelector('.orders-container');
        this.searchInput = document.querySelector("#search-field");
        this.cardSection = document.querySelector('#card-section');
        this.notFound = document.querySelector("#notFound");
        this.rightArrow = document.querySelector("#arrow");
        this.products = products;
        this.orders = [];
        this.searchInput.addEventListener('keyup', event => {
            this.handleSearch(event)
        });

        //toggle sidebar
        this.rightArrow.addEventListener('click', () => {
            if (!this.cardSection.classList.contains("d-none")) {
                this.cardSection.classList = "card-section d-none";
            } else {
                this.cardSection.classList = "card-section d-block";
            }
        })
    }

    //handle search
    handleSearch(e) {
        const searchValue = e.target.value.trim().toLowerCase();
        let filterProducts = this.products.filter(pd => pd.title.toLowerCase().includes(searchValue));
        this.displayAllProducts(filterProducts);
            this.notFound.textContent = "";
        if (filterProducts.length == 0) {
            this.notFound.textContent = "No Product Found!";
        } 
    }


    //calculate expanse
    calculateExpanse(orders) {
        const discountNode = document.querySelector("#discount");
        const subtotalNode = document.querySelector("#subtotal");
        const shippingNode = document.querySelector("#shipping");
        const totalNode = document.querySelector("#total");
        const btnTextNode = document.querySelector("#pay");

        let discount = 0,
            subtotal = 0,
            shipping = 0,
            total = 0,
            pay = 0;

        orders.forEach(pd => {
            const singleProductPrice = pd?.price / pd?.quantity;

            //if discount property exist in product object.
            if (pd["discount"]) {
                const discountPrice = (pd.discount * singleProductPrice) / 100;
                discount += (discountPrice * pd?.quantity);
                subtotal += (pd.price - discountPrice) * pd.quantity;
            } else {
                subtotal += pd.price;
            }
        });

        if (shipping) {
            total = subtotal + shipping;
        } else {
            total = subtotal;
        };
        pay = total;

        discountNode.textContent = discount || "0.00";
        subtotalNode.textContent = subtotal || "0.00";
        shippingNode.textContent = shipping || "0.00";
        totalNode.textContent = total || "0.00";
        btnTextNode.textContent = pay || "0.00";
    };

    //get order
    getOrder(pd) {
        const singleOrder = {...pd};
        const product = this.orders.find(item => item?.id === singleOrder?.id);
        if (!product) {
            singleOrder.quantity = 1;
            this.orders.push(singleOrder);
        } else {
            product.quantity++;
            product.price = singleOrder.price + product.price;
        
        }
        this.orderCard(this.ordersContainer, this.orders);
    };

    //single order card
    orderCard(element, orders) {
        element.innerHTML = "";
        
        orders.forEach(pd => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = "./icons/delete.png";
            img.alt = "img";
            img.className = "delete-icon"
            img.addEventListener('click', () => {
                this.deleteOrder(pd);
            });
            div.className = "order-card";
            div.innerHTML = `
                    <div class="order-thumb">
                        <img height="35px" width="35px" src=${pd?.img}/>
                        <span class="quantity">${pd?.quantity}</span>
                    </div>
                    <p>${pd?.title}</p>
                    <p>${pd?.price} BDT</p>`;
            div.appendChild(img);
            element.appendChild(div);
        });

        this.calculateExpanse(orders);
    };


    //delete order
    deleteOrder(order) {
        const singleOrder = { ...order };
        if (singleOrder?.quantity <= 1) {
            const filteredOrders = this.orders.filter(pd => pd?.id !== singleOrder?.id);
            this.orders = filteredOrders;
            this.orderCard(this.ordersContainer, filteredOrders);
        } else {
            const product = this.orders.find(pd => pd?.id === singleOrder?.id);
            const singleProductPrice = product.price / product.quantity;
            product.quantity--;
            product.price-= singleProductPrice;
            this.orderCard(this.ordersContainer, this.orders);
        }

        if (this.orders.length === 0) {
            this.ordersContainer.innerHTML = `<div class="order-card">
                        <div class="order-thumb">
                            <img height="35px" width="35px" src="./icons//shop.png"/>
                            <span class="quantity">x</span>
                        </div>
                        
                        <p>Title</p>
                        <p>Price</p>
                        <img height="25px" width="25px" src="./icons/delete.png"/>
                    </div>`
        }
    };

    //display all products
    displayAllProducts(products) {
        const allProducts = products || this.products;
        this.productsContainer.innerHTML = "";
        allProducts.forEach(product => {
            let div = document.createElement('div');
            div.addEventListener('click', () => {
                this.getOrder(product);
            });
            div.className = "product-card";
            div.innerHTML = `
                <img src=${product?.img} alt="image"/>
                <h4>${product?.title}</h4>
                <p> Price:- ${product?.price} BDT</p>
            `;
            this.productsContainer.appendChild(div);
        });
    };



};

const ecommerceApp = new App(products);


ecommerceApp.displayAllProducts();




