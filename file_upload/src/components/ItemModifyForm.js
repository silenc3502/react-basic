import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function ItemModifyForm({ item, isLoading, onModify }) {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeFile = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);

  const pictureUrl = (itemName) => {
    return (
        `../assets/uploadImgs/${itemName}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(itemName + " " + price + " " + description);
    console.log(file);

    onModify(itemName, price, description, file);
  };

  useEffect(() => {
    if (item) {
      setItemName(item.itemName);
      setPrice(item.price);
      setDescription(item.description);
    }
  }, [item]);

  return (
    <div align="center">
      <h2>상품 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && item && (
        <>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>상품번호</td>
                <td>
                  <input type="text" value={item.itemId} disabled />
                </td>
              </tr>
              <tr>
                <td>상품명</td>
                <td>
                  <input
                    type="text"
                    value={itemName}
                    onChange={handleChangeItemName}
                  />
                </td>
              </tr>
              <tr>
                <td>상품가격</td>
                <td>
                  <input type="text" value={price} onChange={handleChangePrice} />
                  &nbsp;원
                </td>
              </tr>
              <tr>
                <td>상품파일</td>
                <td>
                  <input type="file" onChange={handleChangeFile} />
                </td>
              </tr>
              <tr>
                <td>미리보기</td>
                <td>

                  <img src={ require(`../assets/uploadImgs/${item.pictureUrl[0]}`) } alt="" width="200"/>
                </td>
              </tr>
              <tr>
                <td>상품설명</td>
                <td>
                  <textarea
                    rows="5"
                    value={description}
                    onChange={handleChangeDescription}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <button type="submit">수정</button>
            <Link to={`/read/${item.itemId}`}>취소</Link>
          </div>
        </form>
        </>
      )}
    </div>
  );
}

export default ItemModifyForm;
