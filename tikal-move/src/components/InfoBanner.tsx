//@ts-nocheck

export default function InfoBanner() {

  return(
    <section className="ml-24 mt-20 max-w-2xl w-full sm:w-8/12 h-28 rounded-xl bg-rose-600 opacity-90 text-white">
      <div className="flex justify-between ml-8">
        <div className=" font-medium text-xl ml-2 mt-4">
          <h1 className="">Total Alerts Since <br /> Last Login</h1>
        </div>
        <div className="flex mt-8 mr-10">
          <div className="mr-2 font-semibold text-5xl">
            12
          </div>
          <div className="mr-4 mt-1 ml-4">
          <small> +1 since last login</small>
          </div>
        </div>
        {/* <div>
          <h6>Confidence Score on Last Reading </h6>
          </div> */}
        </div>
      </section>
  )

}