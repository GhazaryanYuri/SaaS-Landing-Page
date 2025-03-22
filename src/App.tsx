import "./app.css";

import Header_Img from "./assets/Header/header.png";
import CTA_Img from "./assets/CTA/cta.png";

//////////////////////////////////////////////////////////////////

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Info_Component/Info_Component";
import Clients from "./Components/CLients_Section/Clients";
import Product from "./Components/Product/Product";
import Feature from "./Components/Feature_Section/Feature";
import Feedback from "./Components/Feedback/Feedback";
import CTA from "./Components/Info_Component/Info_Component";
import Footer from "./Components/Footer/Footer";

const header_data = {
  title: "SaaS Landing Page Template",
  subtitle:
    "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  button_text: "Get started",
  img_src: Header_Img,
};

const cta_data = {
  title: "Questions? Let’s talk",
  subtitle: "Contact us through our 24/7 live chat.We’re always happy to help!",
  button_text: "Get started",
  img_src: CTA_Img,
};

const App = () => {
  return (
    <section className="parent_cont">
      <Navbar />
      <Header
        title={header_data.title}
        subtitle={header_data.subtitle}
        button_text={header_data.button_text}
        img_url={header_data.img_src}
        img_cont_class_name="img_cont_primary"
      />
      <Clients />
      <Product />
      <Feature />
      <Feedback />
      <CTA
        title={cta_data.title}
        subtitle={cta_data.subtitle}
        button_text={cta_data.button_text}
        img_url={cta_data.img_src}
        img_cont_class_name="img_cont_secondary"
      />
      <Footer />
    </section>
  );
};

export default App;
