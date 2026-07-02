import LegalPage, { LegalSection } from "../components/layout/LegalPage";
import { business } from "../data/business";

export default function Terms() {
  return (
    <LegalPage
      path="/terms-and-conditions"
      eyebrow="Legal"
      title="Terms and Conditions"
      description="Terms and Conditions of BMTAX INDIA (OPC) PRIVATE LIMITED — guidelines for using our services and website."
      effectiveDate="January 19, 2025"
    >
      <LegalSection heading="Introduction">
        <p>
          Welcome to {business.legalName}! These terms and conditions outline the rules and
          regulations for the use of our website (bmtaxopc.com) and services. By accessing or
          using our website and services, you accept these terms and conditions in full.
        </p>
      </LegalSection>

      <LegalSection heading="Services">
        <p>
          {business.legalName} provides services related to tax consultation, compliance and
          other business-related legal services. The scope and specifics of our services will be
          agreed upon at the time of engagement.
        </p>
      </LegalSection>

      <LegalSection heading="User Responsibilities">
        <p>By using our website and services, you agree to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Provide accurate and up-to-date information during registration and communication.</li>
          <li>
            Maintain the confidentiality of your account credentials and notify us immediately in
            case of unauthorized access.
          </li>
          <li>
            Use our website and services only for lawful purposes and refrain from any activity
            that could harm our systems or reputation.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          All content on this website, including text, graphics, logos and software, is the
          property of {business.legalName} unless otherwise stated. Unauthorized use,
          reproduction or distribution of this content is prohibited.
        </p>
      </LegalSection>

      <LegalSection heading="Service Limitations">
        <p>
          {business.legalName} does its best to ensure uninterrupted and error-free operation of
          the website and services. However, we do not guarantee the website&apos;s continuous
          availability or that it will be free from errors or omissions.
        </p>
      </LegalSection>

      <LegalSection heading="Payment Terms">
        <p>
          All payments for our services are to be made as per the agreed terms and conditions
          outlined during the service engagement. Failure to make timely payments may result in
          suspension or termination of services.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          {business.legalName} will not be held liable for any indirect, incidental or
          consequential damages resulting from the use or inability to use our services or
          website. Our liability is limited to the extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Links">
        <p>
          Our website may include links to third-party websites for additional resources. We are
          not responsible for the content or privacy practices of these external sites.
        </p>
      </LegalSection>

      <LegalSection heading="Amendments">
        <p>
          {business.legalName} reserves the right to update or change these terms and conditions
          at any time. We will notify you of significant changes, and continued use of our
          services implies acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>
          We reserve the right to terminate or suspend access to our website and services at our
          discretion, without prior notice, for activities deemed harmful or in violation of
          these terms.
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>
          These terms and conditions are governed by the laws of India. Any disputes arising from
          these terms will be subject to the exclusive jurisdiction of the courts located in
          Darrang, Assam.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Information">
        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Email: {business.supportEmail}</li>
          <li>Phone: {business.phone}</li>
          <li>Address: {business.address.full}</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
