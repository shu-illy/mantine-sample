import React from "react";
import { faker } from "@faker-js/faker";
import { Avatar, Button, Table, Text } from "@mantine/core";

type Purchase = {
  id: number;
  productId: number;
  productName: string;
  category: string;
  price: number;
  userId: number;
  userName: string;
};

const purchases: Purchase[] = Array.from(new Array(200), (_, i) => {
  return {
    id: i,
    productId: Math.floor(Math.random() * 1000),
    productName: faker.commerce.productName(),
    category: faker.commerce.product(),
    price: Math.floor(Math.random() * 100000),
    userId: Math.floor(Math.random() * 1000),
    userName: faker.name.fullName(),
  };
});

export const PurchasesContents = () => {
  const rows = purchases.map((purchase) => (
    <tr key={purchase.id}>
      <td>{purchase.productId}</td>
      <td>{purchase.productName}</td>
      <td>{purchase.category}</td>
      <td>{purchase.price}</td>
      <td>{purchase.userName}</td>
      <td>
        <Button color="green">詳細</Button>
      </td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>商品ID</th>
          <th>商品名</th>
          <th>カテゴリ</th>
          <th>価格</th>
          <th>購入者</th>
          <th></th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </Table>
  );
};
