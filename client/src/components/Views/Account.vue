
<template>
  <mdb-container class="account-info">
    <mdb-row>
      <mdb-col md="12">
        <h1>My Account</h1>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col md="4">
        <mdb-row>
          <mdb-col md="12">
            <h2>Personal Information</h2>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col md="8">
        <mdb-row>
          <mdb-col md="12">
            <p>DRTV protects your privacy and all data is in accordance with the EU General Data Protection Regulation (GDPR). DRTV's service uses cookies and device usage analysis to be able to deliver the best possible experience and service. Please select what you accept below. Please note that additional cookies are used on the website for it to work. Take a look at our PRIVACY POLICY for more information.</p>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="12">
            <mdb-row class="ad-cookies">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultChecked2" checked>
                <label class="custom-control-label" for="defaultChecked2">Advertising</label>
              </div>
            </mdb-row>
            <mdb-row class="ad-cookies">
              <p>We use Google technology to deliver more relevant marketing to our users, to enable custom marketing, to evaluate campaign performance, and to measure user interaction with DRTV's service.</p>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbBtn
} from "mdbvue";
export default {
  name: "Account",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbInput
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.account-info {
  margin-top: 70px;
  color: #fff;

  h1 {
    padding-bottom: 20px;
    text-align: center;
    font-weight: 600;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  label.custom-control-label {
    padding-left: 20px;
    padding-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    &:before {
      top: 0.35rem;
      width: 1.2rem !important;
      height: 1.2rem !important;
    }

    &:after {
      top: 0.44rem;
      left: -1.4rem;
    }
  }

  p {
    text-align: left;
    color: #aca9bf;
  }

  .ad-cookies {
    margin-left: 0px;
  }
}
</style>