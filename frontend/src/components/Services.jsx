import { services } from "../../seed/backend";

export default function Services() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {services?.map((item) => (
            <div
              key={item?.id}
              className="p-5 bg-[--cardDark] rounded-lg border border-gray-500/40 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold border-b pb-2 mb-4">{item?.title}</h2>
              <p className="text-gray-500">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
