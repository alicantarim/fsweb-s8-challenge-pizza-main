import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import workintech from "/workintech.svg";
// import Extra from "./Extra";

const pizzaSizes = [
  { id: "s", size: "Küçük" },
  { id: "m", size: "Orta" },
  { id: "l", size: "Büyük" },
];

const doughTypes = [
  { id: "i", size: "İnce" },
  { id: "n", size: "Normal" },
  { id: "k", size: "Kalın" },
];

const extras = [
  { id: 1, name: "Pepperoni" },
  { id: 2, name: "Domates" },
  { id: 3, name: "Biber" },
  { id: 4, name: "Sosis" },
  { id: 5, name: "Mısır" },
  { id: 6, name: "Sucuk" },
  { id: 7, name: "Kanada Jambonu" },
  { id: 8, name: "Ananas" },
  { id: 9, name: "Tavuk Izgara" },
  { id: 10, name: "Jalepeno" },
  { id: 11, name: "Kabak" },
  { id: 12, name: "Soğan" },
  { id: 13, name: "Sarımsak" },
];

const price = 85.5;

function App() {
  // const [formData, setFormData] = useState(initialData);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price * count);
  const [elections, setElections] = useState([]);

  const increment = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const decrement = (event) => {
    event.preventDefault();
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  const addElection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Checkbox işaretlenirse değeri "elections" array e ekler.
      setElections((prevElections) => [...prevElections, value]);
    } else {
      // Checkbox işareti kaldırılırsa, array'den çıkarır.
      setElections((prevElections) =>
        prevElections.filter((item) => item !== value)
      );
    }
  };

  const handleOrderCompleted = (event) => {
    event.preventDefault();
    alert("Sipariş Verildi");
  };

  // UI SCREEN SECTION START HERE
  return (
    <div className="App">
      <header className="">
        <div className="header-content">
          <h1>Tenknoloji Yemekler</h1>
          <div className="container-lg">
            <p>
              Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong>
            </p>
          </div>
        </div>
      </header>
      {/* HEADER END */}

      <main className="bg-secondary">
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
          <div className="input-group-dough flex gap-l between container-lg">
            <div className="chooseSize flex column">
              <label className="font-size-l">
                <strong>Boyut Seç *</strong>
              </label>
              {pizzaSizes.map((pizzaSize) => (
                <div className="grid-item" key={pizzaSize.id}>
                  <label className="flex gap-s font-weight" htmlFor="size">
                    <input
                      key={pizzaSize.id}
                      type="radio"
                      name="size"
                      value={pizzaSize.boy}
                    />
                    {pizzaSize.size}
                  </label>
                </div>
              ))}
            </div>
            {/* ORDER SIZE SECTION END */}

            {/* ORDER DOUGH TYPE SECTION START */}
            <div className="chooseDoughType flex column">
              <label
                htmlFor="dough"
                className="title-dough font-size-l padding-bottom flex column text-start"
              >
                <strong>Hamur Seç *</strong>
                <select
                  name="dough"
                  id="dough"
                  defaultValue={"-1"}
                  // value={init.name}
                >
                  <option value="-1" disabled={true}>
                    Hamur Kalınlığı Seçiniz
                  </option>
                  {doughTypes.map((doughType) => (
                    <option
                      className="semi-bol"
                      key={doughType.id}
                      value={doughType.size}
                    >
                      {doughType.size}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* EXTRA MATERIALS  CHECKBOX START */}
          <div className="extra-materials container-lg">
            <h2>Ek Malzemeler</h2>
            <p>En fazla 10 malzeme seçebilirsiniz. Tanesi 5 TL</p>
            <div className="grid-container between">
              {extras.map((extra, ind) => (
                <div className="grid-item" key={extra.id}>
                  <label className="flex gap-s font-weight">
                    <input
                      type="checkbox"
                      onChange={addElection}
                      value={extra.name}
                    />
                    {extra.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* EXTRA MATERIALS  CHECKBOX END */}
        </div>

        {/* ADD NOTES START */}
        {/* <div className="note-and-order-summary text-start"> */}
        <div className="container-lg flex column margin-bottom-lg">
          <label htmlFor="order-note" className="margin-bottom">
            <h2>Sipariş Notu</h2>
          </label>
          <textarea
            style={{ minWidth: "650px" }}
            name="order-note"
            id="order-note"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            cols={5}
            rows={4}
          ></textarea>
        </div>
        {/* ADD NOTES END */}

        <hr className="margin-bottom-lg container-lg" />

        {/* QUANTITY SELECTION START */}
        <div className="flex between container-lg">
          <div className="quantity-select button-div">
            <button className="decrement button" onClick={decrement}>
              -
            </button>
            <div className="counter">{count}</div>
            <button className="increment button" onClick={increment}>
              +
            </button>
          </div>
          {/* QUANTITY SELECTION END */}

          <div className="order-summary flex column margin-bottom">
            <h3 className="padding-s">Sipariş Toplamı</h3>
            <div className="summary-item-election flex between semi-bold padding-s">
              <span>Seçimler: </span>
              {/* Seçilen malzeleme adedi * 5TL ile ekrana yazar. */}
              <span>{elections.length * 5} TL</span>
            </div>
            <div className="summary-item-total">
              <div className="flex between margin-button semi-bold padding-s color-red">
                <span>Toplam: </span>
                <span>
                  {totalPrice * count + elections.length * 5 * count} TL
                </span>
              </div>
            </div>
            <button
              className="button semi-bold padding-s"
              onClick={handleOrderCompleted}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
