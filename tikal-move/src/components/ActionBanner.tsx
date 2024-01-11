//@ts-nocheck

export default function ActionBanner() {

  return(
    <section className="ml-24 mt-2 max-w-2xl sm:w-8/12 h-28 rounded-xl bg-emerald-400 opacity-90 text-white">
      <div className="flex justify-between ml-8">
        <div className=" font-medium ml-2 mt-6">
          <h1 className="">Action Taken: </h1>
          <p className="text-2xl">Main Valves Shut Down</p>
        </div>
        {/* <div>
          <h6>Confidence Score on Last Reading </h6>
          </div> */}
        </div>
      </section>
  )

}