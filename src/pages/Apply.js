import React from "react";

const Apply = () => {
  return (
    <>
      <main className="content apply">
        <div className="container">
          <section className="page-title">
            <h1 className="text-center">Applications</h1>
          </section>
          <section>
            <h2 className="text-center">New Students</h2>
          </section>
          <section>
            <p className="text-center">
              Thank you for choosing Sedibeng TVET College as the institution
              where you would like to further your studies.
            </p>
            <p className="text-center">The application process has 3 phases.</p>
          </section>

          <section className="phase_one margin-top-bottom">
            <h3>Phase One:</h3>
            <ol>
              <li>
                {" "}
                In <strong>Phase one</strong>, you must complete a{" "}
                <strong>Career Interest questionnaire</strong>. <br /> - On the
                first page is a registration form. <br /> - South Africans must
                use their South African ID number
              </li>
              <li>
                International students must use the ID number of their country
                and <strong>NOT</strong> the passport number.
              </li>
              <li>
                There are a 190 Yes / No questions. And it takes approximately
                15 minutes to complete.
              </li>
              <li>
                {" "}
                At the end of the questionnaire a report will be presented to
                assist you in making an informed career choice.
              </li>
            </ol>

            <a href="/" className="link_button">
              Click here to continue
            </a>
          </section>
          <section className="phase_two margin-top-bottom">
            <h3>Phase Two:</h3>
            <ol>
              <li>
                You will not be allowed to continue with your online application
                if you did not answer all 190 questions in phase one.
              </li>
              <li>
                In phase 2 you will supply us with your highest qualification:
                (Your qualifications will determine the courses you qualify
                for.)
              </li>
              <li> Select the course you wish to enroll for.</li>
              <li>
                Upload documents (Documents must certified and readable by our
                verifiers otherwise you application will be rejected) <br />- ID
                document / Passport <br /> - Qualifications
                <br />- Proof of Address
                <br />- ID document of next of kin
                <br />- Study Permit (Foreign students)
                <br />- Letter from Employer (Heidelberg Part-Time students)
              </li>
              <li>
                Lastly you have to complete the biographical information section
                of the application
              </li>
              <li>
                On completion of this phase you will receive an email to confirm
                your application.
              </li>
            </ol>

            <a href="/" className="link_button">
              Click here to continue
            </a>
          </section>
          <section className="phase_three margin-top-bottom">
            <h3>Phase Three:</h3>
            <p>
              You only need to use this phase if you did not comply with the
              instruction of uploading certified and clearly readable documents.
            </p>
            <p>
              When the verifier rejects your application because they could not
              read your documents you may upload new documents here
            </p>

            <a href="/" className="link_button">
              Click here to continue
            </a>
          </section>
          <hr />

          <section>
            <h2 className="text-center">International Students</h2>
            <p>
              To obtain a letter from the college to apply for a study permit
              foreign applicants must contact the campus they wish to enrol at
            </p>
            <p>The contact person at each campus is as follows:</p>
          </section>
          <section>
            <table>
              <tr>
                <th>Campus</th>
                <th>Contact Person</th>
                <th>Tel Extension</th>
                <th>Email</th>
              </tr>
              <tr>
                {" "}
                <td> Heidelberg</td>
                <td> Mr W Ncube</td>
                <td> 407</td>
                <td> witn@sedcol.co.za</td>
              </tr>
              <tr>
                <td>Sebokeng</td>
                <td> Mr S Qwela</td>
                <td> 341</td>
                <td> qwela@sedcol.co.za</td>
              </tr>
              <tr>
                <td> Vanderbijlpark</td>
                <td> Mr T Marumo</td>
                <td> 207</td>
                <td> marumots@sedcol.co.za</td>
              </tr>
              <tr>
                <td> Vereeniging</td>
                <td> Ms M Mokoena</td>
                <td> 100</td>
                <td> maki@sedcol.co.za</td>
              </tr>
            </table>
            <p>College Telephone number: +27 16 420-2520</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Apply;
