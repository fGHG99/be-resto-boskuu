import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Selamat Datang, Pesan Makanan Mu Di sini</h2>
      <p>
        Pilih menu favorit mu di halaman menu kami dan menikmati pesanan kalian.
      </p>
      <p>
        Menu kami di buat dengan sepenuh hati, Dan di sajikan dengan cepat dengan Chef profesional
      </p>
    </section>
  );
};

export default MealsSummary;
