import LegalPage, { LegalSection } from "../components/layout/LegalPage";
import { business } from "../data/business";

export default function RefundPolicy() {
  return (
    <LegalPage
      path="/refund-policy"
      eyebrow="Legal"
      title="Refund Policy"
      description="Refund Policy of BMTAX INDIA (OPC) PRIVATE LIMITED — learn about our refund terms and conditions."
      effectiveDate="January 19, 2025"
    >
      <LegalSection heading="Introduction">
        <p>
          At {business.legalName}, accessible from bmtaxopc.com, we prioritize transparency and
          clarity in all aspects of our services, including our refund policy. This document
          outlines the terms under which refunds may or may not be applicable.
        </p>
      </LegalSection>

      <LegalSection heading="General Policy">
        <p>
          All payments made to {business.legalName} for services are considered final. We do not
          offer refunds for successfully completed tasks or services. This policy ensures the
          integrity and fairness of our operations.
        </p>
      </LegalSection>

      <LegalSection heading="Scope of Services">
        <p>
          Our services include tax consultation, compliance and other business-related legal
          services. Once a task has been successfully delivered or a service rendered, the
          associated payment is non-refundable. This applies to:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Tax filing and compliance services.</li>
          <li>Legal consultation and documentation.</li>
          <li>Other agreed-upon services provided by {business.legalName}.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Exceptional Circumstances">
        <p>
          In case of an error or failure on our part to deliver the agreed services, we will
          review the situation on a case-by-case basis. Any resolutions, including partial
          refunds or corrective actions, are at the sole discretion of {business.legalName}.
        </p>
      </LegalSection>

      <LegalSection heading="Payment Disputes">
        <p>
          For any disputes regarding payments, please contact us at the earliest opportunity. We
          will make every effort to resolve issues promptly and fairly.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Information">
        <p>If you have any questions about our refund policy or require further assistance, please contact us:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Email: {business.supportEmail}</li>
          <li>Phone: {business.phone}</li>
          <li>Address: {business.address.full}</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
