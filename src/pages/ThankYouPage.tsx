import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-light-gray py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-300 bg-white px-8 py-14 text-center shadow-sm">
            <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">Thank You</h1>
            <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground/80">
              Your form was submitted successfully. Our office will follow up with you soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ThankYouPage;
