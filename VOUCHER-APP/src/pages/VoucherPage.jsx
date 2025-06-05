import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import VouncherList from '../components/VouncherList'

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={'Voucher Page'}></Breadcrumb>
        <VouncherList /> 
      </Container>
    </section>
  )
}

export default VoucherPage
