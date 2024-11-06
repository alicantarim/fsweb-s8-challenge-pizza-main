import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
// import Extra from "./Extra";

const init = [{ name: "İnce" }, { name: "Normal" }, { name: "Kalın" }];

const extras = [
  {
    value: "pepperoni",
    label: "Pepperoni",
  },
  {
    value: "sosis",
    label: "Sosis",
  },
  {
    value: "kanadaJambonu",
    label: "Kanada Jambonu",
  },
  {
    value: "tavukIzgara",
    label: "Tavuk Izgara",
  },
  {
    value: "sogan",
    label: "Soğan",
  },
  {
    value: "domates",
    label: "Domates",
  },
  {
    value: "misir",
    label: "Mısır",
  },
  {
    value: "sucuk",
    label: "Sucuk",
  },
  {
    value: "jalepeno",
    label: "Jalepeno",
  },
  {
    value: "sarimsak",
    label: "Sarımsak",
  },
  {
    value: "biber",
    label: "Biber",
  },
  {
    value: "zeytin",
    label: "Zeytin",
  },
  {
    value: "ananas",
    label: "Ananas",
  },
  {
    value: "kabak",
    label: "Kabak",
  },
];

const initialData = {
  isim: "string",
  boyut: "string",
  malzemeler: [],
  özel: "string",
};

function App() {
  const [formData, setFormData] = useState(initialData);

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    console.log(type, name, value, checked);

    if (type === "checkbox" && name === "malzemeler") {
      setFormData((prevData) => ({
        ...prevData,
        malzemeler: checked
          ? [...prevData.malzemeler, value]
          : prevData.malzemeler.filter((item) => item !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Tenknoloji Yemekler</h1>
          <p>
            Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong>
          </p>
        </div>
      </header>
      {/* HEADER END */}

      <main>
        {/* FOOD DETAIL SECTION START */}
        <div className="container-lg extra">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="food-rank-price">
            <h3>85.50₺</h3>
            <p>4.8</p>
            <p>(200)</p>
          </div>
          <div className="food-description">
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>

        {/* FOOD DETAIL SECTION STOP */}

        <div className="">
          {/* ORDER SIZE SECTION START */}
          <div className="input-group-dough flex gap-l">
            <div className="chooseSize flex column ">
              <label className="font-size-l padding-topbottom">
                <strong>Boyut Seç *</strong>
              </label>
              <label className="padding-topbottom">
                <input className="padding-left" type="radio" name="size" />
                Küçük
              </label>
              <label className="padding-topbottom">
                <input type="radio" name="size" />
                Orta
              </label>
              <label className="padding-topbottom">
                <input type="radio" name="size" />
                Büyük
              </label>
            </div>
            {/* ORDER SIZE SECTION END */}

            {/* ORDER DOUGH TYPE SECTION START */}
            <div className="chooseDoughType flex column">
              <label
                htmlFor="dough"
                className="title-dough font-size-l padding-topbottom padding-bottom text-start"
              >
                <strong>Hamur Seç</strong>
                <span className="span-dough">*</span>
              </label>
              <select
                className="padding-topbottom"
                name="dough"
                id="dough"
                defaultValue={"-1"}
                value={init.name}
                onChange={handleChange}
              >
                <option value="-1" disabled={true}>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalin">Kalın</option>
              </select>
            </div>
            {/* ORDER DOUGH TYPE SECTION END */}
          </div>

          {/* EXTRA MATERIALS SECTION START */}
          <div className="extra-materials container-lg">
            <h2 className="padding-topbottom">Ek Malzemeler</h2>
            <p className="p-long">En fazla 10 mazleme seçebilirsiniz. 5TL</p>
            <div>
              {extras.map((extra, ind) => (
                <extra
                  key={ind}
                  onChange={handleChange}
                  checked={formData.malzemeler.includes(extra.value)}
                  name="malzemeler"
                  value={extra.value}
                  label={extra.label}
                />
              ))}
            </div>
          </div>
          {/* EXTRA MATERIALS SECTION END */}
        </div>
      </main>
    </div>
  );
}

export default App;
