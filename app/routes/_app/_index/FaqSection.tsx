export default function FAQSection() {
  return (
    <section className="relative py-8 sm:py-32" id="faq">
      <div className="mx-16 lg:mx-24">
        <div className="space-y-8">
          <p className="text-5xl">Frequently asked questions</p>
          <p className="mt-4 text-lg">
            Can't find what you're looking for? Send us an email and we'll get back to you.
          </p>
        </div>
        <ul className="mt-16 grid grid-flow-row grid-cols-3 gap-8">
          <FAQItem
            question="Morbi nec mattis felis?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Morbi nec mattis felis?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Morbi nec mattis felis?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Morbi nec mattis felis?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQItem
            question="Morbi nec mattis felis?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </ul>
      </div>
    </section>
  )
}

function FAQItem(props: { question: string; answer: string }) {
  return (
    <li>
      <h3 className="text-lg font-semibold leading-7 text-slate-900 dark:text-white">
        {props.question}
      </h3>
      <p className="mt-4 text-sm text-slate-700 dark:text-white">{props.answer}</p>
    </li>
  )
}
