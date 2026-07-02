import LegalPage, { LegalSection } from "../components/layout/LegalPage";
import { business } from "../data/business";

export default function Grievance() {
  return (
    <LegalPage
      path="/grievance-redressal"
      eyebrow="Legal"
      title="Grievance Redressal"
      description="Grievance Redressal Policy of BMTAX INDIA (OPC) PRIVATE LIMITED — learn how to raise your concerns effectively."
      effectiveDate="January 19, 2025"
    >
      <LegalSection heading="Introduction">
        <p>
          At {business.legalName}, accessible from bmtaxopc.com, we are committed to addressing
          any grievances or concerns you may have regarding our services. This document outlines
          the procedure for submitting and resolving grievances effectively.
        </p>
      </LegalSection>

      <LegalSection heading="Purpose">
        <p>
          The purpose of this grievance redressal mechanism is to provide our clients with a
          transparent and accessible way to voice their concerns and ensure they are addressed in
          a timely and fair manner.
        </p>
      </LegalSection>

      <LegalSection heading="How to Raise a Grievance">
        <p>If you have a complaint, you can raise it through one of the following channels:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Email: {business.supportEmail}</li>
          <li>Phone: {business.phone}</li>
          <li>In person: Visit us at our office, located at {business.address.full}</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Information Required">
        <p>
          When submitting a grievance, please include the following details to help us resolve
          your issue efficiently:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Your name and contact details (email and/or phone number).</li>
          <li>Details of the service related to your grievance.</li>
          <li>A clear description of the issue or concern.</li>
          <li>Any supporting documents or evidence, if applicable.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Response Time">
        <p>
          We aim to acknowledge your grievance within 48 hours of receipt. Our team will review
          your concern and provide a resolution or update within 7 working days.
        </p>
      </LegalSection>

      <LegalSection heading="Escalation">
        <p>
          If you are not satisfied with the initial resolution, you may escalate the issue by
          contacting our senior management at the same email or phone number provided above. We
          are committed to ensuring your concerns are addressed to your satisfaction.
        </p>
      </LegalSection>

      <LegalSection heading="Commitment">
        <p>
          {business.legalName} is dedicated to maintaining the highest standards of service and
          professionalism. We value your feedback and aim to continuously improve our processes
          to better serve you.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Information">
        <p>If you have any further questions or need assistance, please contact us:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Email: {business.supportEmail}</li>
          <li>Phone: {business.phone}</li>
          <li>Address: {business.address.full}</li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
