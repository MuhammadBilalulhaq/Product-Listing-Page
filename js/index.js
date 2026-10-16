const Products = [
  {
    "image": "./Assets/black nike.jpg",
    "category": "Footwear",
    "item": "Black Athletic Sneaker",
    "brand": "Nike",
    "color": "Black",
    "size": "Large",
    "price": "$89.99",
    "description": "Black Nike athletic training shoe floating against a white background[cite: 21]."
  },
  {
    "image": "./Assets/burgendy leather bag.jpg",
    "category": "Bags",
    "item": "Leather Backpack",
    "brand": "Artisan Leather",
    "color": "Burgundy",
    "size": "XL",
    "price": "$120.00",
    "description": "Burgundy/maroon leather backpack with side pockets and a front zippered compartment[cite: 22]."
  },
  {
    "image": "./Assets/camera.jpg",
    "category": "Electronics",
    "item": "Instant Camera",
    "brand": "Polaroid",
    "color": "White and Dark Gray",
    "size": "Medium",
    "price": "$99.99",
    "description": "Polaroid OneStep 2 i-Type white and dark gray instant film camera on a white table[cite: 23]."
  },
  {
    "image": "./Assets/chanel 5.jpg",
    "category": "Fragrance",
    "item": "Chanel No. 5 Perfume",
    "brand": "Chanel",
    "color": "Peach",
    "size": "Small",
    "price": "$150.00",
    "description": "Chanel No. 5 Eau de Parfum bottle with peach-colored liquid against a light blue backdrop[cite: 24]."
  },
  {
    "image": "./Assets/channel perfume.jpg",
    "category": "Fragrance",
    "item": "Chanel Perfume",
    "brand": "Chanel",
    "color": "Black",
    "size": "Small",
    "price": "$165.00",
    "description": "Coco Noir Chanel perfume bottle displayed in front of red decorative flowers[cite: 25]."
  },
  {
    "image": "./Assets/dior.jpg",
    "category": "Fragrance",
    "item": "Perfume Bottles",
    "brand": "Dior",
    "color": "Pink and Teal",
    "size": "Small",
    "price": "$140.00",
    "description": "Miss Dior Parfum bottle paired with a blue/teal fragrance bottle[cite: 26]."
  },
  {
    "image": "./Assets/green nike.jpg",
    "category": "Footwear",
    "item": "Nike Sneaker",
    "brand": "Nike",
    "color": "Neon Yellow/Green",
    "size": "Medium",
    "price": "$110.00",
    "description": "Neon yellow/green Nike SuperRep training shoe against a matching background[cite: 27]."
  },
  {
    "image": "./Assets/gucci bag.jpg",
    "category": "Bags",
    "item": "Gucci Crossbody Bag",
    "brand": "Gucci",
    "color": "Black",
    "size": "Large",
    "price": "$1,250.00",
    "description": "Black quilted leather Gucci camera bag with gold chain strap and interlocking GG logo[cite: 28]."
  },
  {
    "image": "./Assets/Headphones.jpg",
    "category": "Electronics",
    "item": "Over-Ear Headphones",
    "brand": "AudioTech",
    "color": "Black",
    "size": "XL",
    "price": "$199.99",
    "description": "Black wireless over-ear headphones laid out on a bright yellow background[cite: 29]."
  },
  {
    "image": "./Assets/hugo boss perfume.jpg",
    "category": "Fragrance",
    "item": "Hugo Boss Perfume",
    "brand": "Hugo Boss",
    "color": "Clear and Green",
    "size": "Small",
    "price": "$85.00",
    "description": "Hugo Man Eau de Toilette bottle and its green box set against rocks and a neutral background[cite: 30]."
  },
  {
    "image": "./Assets/multi color shoes.jpg",
    "category": "Footwear",
    "item": "Designer Sneakers",
    "brand": "Designer",
    "color": "Multi-colored",
    "size": "XL",
    "price": "$250.00",
    "description": "Multi-colored panel sneakers (white, teal, orange, purple, red) placed on and near a white box[cite: 31]."
  },
  {
    "image": "./Assets/red casual sneaker.jpg",
    "category": "Footwear",
    "item": "Casual Sneaker",
    "brand": "Vans",
    "color": "Burgundy",
    "size": "Medium",
    "price": "$65.00",
    "description": "Burgundy low-top sneaker with white sole and laces, floating against an orange background[cite: 32]."
  },
  {
    "image": "./Assets/red nike.jpg",
    "category": "Footwear",
    "item": "Red Nike Sneaker",
    "brand": "Nike",
    "color": "Red",
    "size": "Large",
    "price": "$130.00",
    "description": "Red Nike Free RN Flyknit running shoe with a white sole angled against a red background[cite: 33]."
  },
  {
    "image": "./Assets/skincare.jpg",
    "category": "Beauty",
    "item": "Skincare Products",
    "brand": "Faberlic",
    "color": "Orange",
    "size": "Small",
    "price": "$25.00",
    "description": "Faberlic Bioglow illuminating face cream and face serum tubes in vibrant orange next to a tulip and green leaves[cite: 34]."
  },
  {
    "image": "./Assets/smartwatch.jpg",
    "category": "Electronics",
    "item": "Smartwatch",
    "brand": "Apple",
    "color": "Black",
    "size": "Medium",
    "price": "$399.00",
    "description": "Apple Watch with a black sports band and an abstract glowing liquid design on the screen[cite: 35]."
  },
  {
    "image": "./Assets/sued brogue.jpg",
    "category": "Footwear",
    "item": "Suede Brogue",
    "brand": "Handmade",
    "color": "Teal",
    "size": "Large",
    "price": "$180.00",
    "description": "Teal suede dress shoe propped up by whole and sliced apricots on a pink and white tiered surface[cite: 36]."
  },
  {
    "image": "./Assets/sunglasses.jpg",
    "category": "Accessories",
    "item": "Sunglasses",
    "brand": "Ray-Ban",
    "color": "Black",
    "size": "Medium",
    "price": "$154.00",
    "description": "Black Ray-Ban polarized sunglasses resting on a white surface[cite: 37]."
  },
  {
    "image": "./Assets/tote bag.jpg",
    "category": "Bags",
    "item": "Woven Tote Bag",
    "brand": "Bottega-style",
    "color": "Brown",
    "size": "XL",
    "price": "$190.00",
    "description": "Brown woven leather handbag featuring a chunky gold chain strap[cite: 38]."
  },
  {
    "image": "./Assets/water bottle.jpg",
    "category": "Lifestyle",
    "item": "Water Bottle",
    "brand": "Hydro Flask",
    "color": "Matte Green",
    "size": "Small",
    "price": "$30.00",
    "description": "Matte green reusable water bottle with a matching cap standing on a white table[cite: 39]."
  },
  {
    "image": "./Assets/white smartwatch.jpg",
    "category": "Electronics",
    "item": "Smartwatch",
    "brand": "Generic",
    "color": "White",
    "size": "Medium",
    "price": "$45.00",
    "description": "Minimalist white round smartwatches with white silicone straps shown from a top-down view[cite: 40]."
  }
];




const productsContainer = document.getElementById("products-container");

const displayProducts = (products) => {
    productsContainer.innerHTML = "";

    products.forEach((product) => {
        productsContainer.innerHTML += `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card shadow-sm">

                   <img src="${product.image}" 
     class="card-img-top" 
     alt="${product.item}"
     loading="lazy">

                    <div class="card-body">

                        <p class="text-muted mb-1">
                            ${product.category}
                        </p>

                        <h5 class="card-title">
                            ${product.item}
                        </h5>

                        <p>Brand: ${product.brand}</p>

                        <p>Size: ${product.size}</p>

                        <p>Color: ${product.color}</p>

                        <p class="price">$${product.price}</p>
                        <button class="add-btn w-100">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        `;
    });
};


const filter = {
    brand: "",
    color: "",
    category: "",
    size: "",
    price: ""
};

  const filterShoes = (event) => {
    filter[event.target.name] = event.target.value;

    const filteredShoes = Products.filter((product) => {
        const brand = filter.brand === "" || product.brand === filter.brand;
        const color = filter.color === "" || product.color === filter.color;
        const category = filter.category === "" || product.category === filter.category;
        const size = filter.size === "" || product.size === filter.size;

        
        const productPrice = Number(
            product.price.replace(/[$,]/g, "")
        );

        const price =
            filter.price === "" ||
            (filter.price === "0-25" && productPrice < 25) ||
            (filter.price === "25-50" && productPrice >= 25 && productPrice <= 50) ||
            (filter.price === "50-100" && productPrice > 50 && productPrice <= 100) ||
            (filter.price === "100+" && productPrice > 100);

        return brand && color && category && size && price;
    });

    displayProducts(filteredShoes);
};
displayProducts(Products);

const resetFilters = () => {
    filter.brand = "";
    filter.color = "";
    filter.category = "";
    filter.size = "";
    filter.price = "";

    document.querySelectorAll(".form-select").forEach((select) => {
        select.value = "";
    });

    displayProducts(Products);
};
