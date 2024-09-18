export default function Page() {
  return (
    <div style={{ width: '100%', padding: '100px 0px' }}>
      <script
        async
        src="https://js.stripe.com/v3/pricing-table.js"
      ></script>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<stripe-pricing-table pricing-table-id="prctbl_1Q0SbhGTdwHuL5QiHH6g5oI6" publishable-key="pk_live_51K7rvbGTdwHuL5QieweNfzjnF5h458ZEBuaEH6TWdhlGGkPxQDkR13N3kgU4YLZ5KFT0r0r1OMFFSrMrZUg55ydW00oOWw1Eeb"></stripe-pricing-table>'
        }}
      ></div>
    </div>
  )
}
