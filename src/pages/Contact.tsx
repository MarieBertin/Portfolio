
import Layout from "@/components/Layout";
import TheContacts from "@/components/Contact";

const Contact = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary mb-8">Contact</h1>
        </div>
      </div>
      <TheContacts />
    </Layout>
  );
};

export default Contact;



