import { useState } from "react";
import "./index.css";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Label, Form, Input, FormGroup, Button } from "reactstrap";

function App() {
  const [formData, setFormData] = useState(initialForm);

  // console.log("type, name, value, checked:", type, name, value, checked);

  // if (type === "checkbox") {
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // } else {
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // }

  return (
    <div className="App">
      {/* HEADER START */}
      <header>
        <div className="header-content">
          <h1>Teknolojik Yemekler</h1>
          <p>
            Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong>
          </p>
        </div>
      </header>
      {/* HEADER END */}

      <main>
        {/* FOOD DETAIL SECTION START */}
        <div className="container-lg">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="food-rank-price">
            <h3>85.50₺</h3>
            <p>4.8</p>
            <p>(200)</p>
          </div>
        </div>
        <div className="fooddescription">
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        {/* FOOD DETAIL SECTION STOP */}

        <div className="">
          <div className="input-group">
            <Form>
              <div className="chooseSize">
                <Label>Boyut Seç *</Label>
                <FormGroup>
                  <Input type="radio" name="size" />
                  <Label>Küçük</Label>
                  <Input type="radio" name="size" />
                  <Label>Orta</Label>
                  <Input type="radio" name="size" />
                  <Label>Büyük</Label>
                </FormGroup>
              </div>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
