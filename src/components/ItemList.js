import React from "react";

const ItemList = ({ data }) => {

    return (
        <div
            id="mainContent"
            className="container"
            style={{
                marginLeft: 5,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "10px",
                gridAutoRows: "minMax(100px, auto)",
            }}
        >
            {data &&
                data.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            backgroundColor: "#F0F5F2",
                        }}
                    >
                        <div><b>id : </b> {item.id}</div>
                        <div><b>Name : </b> {item.name}</div>
                        <div><b>Gender : </b> {item.gender}</div>
                        <div><b>Colour : </b> {item.colour}</div>
                        <div><b>Price : </b> {item.price}</div>
                        <div><b>category : </b> {item.category}</div>
                    </div>
                ))};

        </div>

    );
};
export default ItemList;