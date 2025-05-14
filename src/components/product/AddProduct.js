import { useState } from "react";
import { supabase } from "./supabaseClient";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState("");
  const [bestseller, setBestseller] = useState(false);

  const handleAdd = async () => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData?.user) {
      alert("أنت مش مسجل دخول!");
      return;
    }

    const { error } = await supabase.from("منتجات").insert([
      {
        "بطاقة تعريف": title,
        "الأكثر مبيعًا": bestseller,
        "وصف": description,
        "فئة": category,
        "صورة": image,
        "الصور": images, // لو نوعه نص
      },
    ]);

    if (error) {
      console.error("فشل في إضافة المنتج:", error.message);
    } else {
      alert("تمت إضافة المنتج!");
      setTitle(""); setDescription(""); setCategory("");
      setImage(""); setImages(""); setBestseller(false);
    }
  };

  return (
    <div>
      <h2>إضافة منتج</h2>
      <input
        type="text"
        placeholder="اسم المنتج"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="الوصف"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="الفئة"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="رابط صورة"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="روابط صور إضافية"
        value={images}
        onChange={(e) => setImages(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        الأكثر مبيعًا
      </label>
      <button onClick={handleAdd}>إضافة</button>
    </div>
  );
}

export default AddProduct;
