import { TextBlock } from "../privacy/_privacy"

export default function Page() {
  return (
    <main className="mx-auto flex flex-col space-y-6 px-16 pt-6 lg:px-24">
      <h1 className="text-5xl">Terms of Service</h1>
      <section className="space-y-4">
        <p>
          Welcome to Remix Railway! Please read these Terms of Service carefully before using our
          website.
        </p>

        <TextBlock title="Acceptance of Terms">
          By accessing or using our website, you agree to be bound by these Terms of Service, as
          well as any additional terms and conditions that may apply to specific sections of our
          website or to products and services available through our website. If you do not agree
          with these Terms of Service, please do not access or use our website.
        </TextBlock>

        <TextBlock title="Use of Website">
          Our website is intended for your personal, non-commercial use. You may not use our website
          for any illegal or unauthorized purpose, including but not limited to violating any
          applicable laws, regulations, or rules.
        </TextBlock>

        <TextBlock title="Intellectual Property">
          All content on our website, including but not limited to text, graphics, logos, images,
          and software, is the property of remixrailway.app and is protected by United States and
          international copyright laws. You may not reproduce, distribute, display, or create
          derivative works of any content on our website without our prior written consent.
        </TextBlock>

        <TextBlock title="Privacy Policy">
          Our Privacy Policy explains how we collect, use, and share your personal information. By
          accessing or using our website, you agree to the terms of our Privacy Policy.
        </TextBlock>

        <TextBlock title="Disclaimers">
          We make no representations or warranties of any kind, express or implied, as to the
          operation of our website or the information, content, materials, or products included on
          our website. You expressly agree that your use of our website is at your own risk.
        </TextBlock>

        <TextBlock title="Limitation of Liability">
          We will not be liable for any damages of any kind arising from the use of our website,
          including but not limited to direct, indirect, incidental, punitive, and consequential
          damages.
        </TextBlock>

        <TextBlock title="Modification of Terms">
          We may revise these Terms of Service at any time without notice. By using our website, you
          agree to be bound by the current version of these Terms of Service.
        </TextBlock>

        <TextBlock title="Governing Law">
          These Terms of Service are governed by the laws of the United States and the state in
          which remixrailway.app is located, without giving effect to any principles of conflicts of
          laws.
        </TextBlock>

        <TextBlock title="Contact Us">
          If you have any questions about these Terms of Service, please contact us. By using our
          website, you acknowledge that you have read, understood, and agree to be bound by these
          Terms of Service.
        </TextBlock>
      </section>
    </main>
  )
}
