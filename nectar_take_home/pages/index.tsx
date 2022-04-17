import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import type ClinicInterface from '../types/clinicInterface';
import { useClinic } from '../contexts/clinic_provider';
import { Container, Row } from 'react-bootstrap';

export async function getStaticProps() {
  const res = await fetch(
    'https://61a576964c822c001704220b.mockapi.io/api/v1/clinics'
  );
  const clinics: ClinicInterface[] = await res.json();
  return {
    props: {
      clinics,
    },
    revalidate: 10, // In seconds
  };
}

type LoginProps = {
  clinics: ClinicInterface[];
};

export default function Login({ clinics }: LoginProps) {
  const [vetClinic, setvetClinic] = useState([]);
  const clinicNames = Object.values(clinics).map((clinic) => clinic.name);
  const router = useRouter();
  const { setCurrentClinic } = useClinic();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }
    const selectedClinic = Object.values(clinics).find(
      (clinic) => clinic.name === vetClinic[0]
    );
    setCurrentClinic(selectedClinic);
    router.push(`/${selectedClinic.id}`);
  };

  return (
    <>
      <Head>
        <link rel="nectar icon" href="/nectar.png" />
      </Head>

      <Container fluid="sm">
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex flex-column justify-content-center align-items-center mb-3">
            <Image className="w-50" src={'/nectar.png'} />
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formClinic">
              <Form.Label>Veterinary Clinic Selection</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setvetClinic}
                options={clinicNames}
                placeholder="Please select your veterinary clinic..."
                selected={vetClinic}
                inputProps={{ required: true }}
              />
              <Form.Control.Feedback type="invalid">
                Please select a veterinary clinic
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide an email
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-5">
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Pleaseprovide a password
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <Button className="w-75 p-3" variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
}
