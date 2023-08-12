import React from "react";
import carVideo from "/car.mp4";

const AnnualEvents = () => {

  const handleEmailForm = e => {
    e.preventDefault();
  }

  return (
    <div className="md:relative mb-10">
      <video
        style={{ height: "100%", objectFit: "cover" }}
        src={carVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="md:absolute md:top-0 md:my-auto md:left-0 w-full h-full bg-[url('https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover md:bg-[url('https://images.pexels.com/photos/210143/pexels-photo-210143.jp')]">
        <div className="hero h-full md:px-20">
          <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center w-full ">
           
            <div className="join join-vertical w-full md:w-1/2  my-custom-gradient bg-[#1010106c]">
              <div className="collapse collapse-arrow join-item border border-base-300 text-white">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                  What are the annual events hosted by VroomVroomPlay?
                </div>
                <div className="collapse-content">
                  <p>
                    VroomVroomPlay hosts a variety of exciting annual events,
                    including the Grand Toy Car Race, Custom Car Design Contest,
                    Off-Road Adventure Rally, and many more!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300 text-white">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  How can I participate in the events?
                </div>
                <div className="collapse-content">
                  <p>
                    To participate in our annual events, simply visit the event
                    page on our website and follow the registration
                    instructions. Some events may require specific
                    qualifications or age groups, so make sure to check the
                    eligibility criteria.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300 text-white">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Are there any registration fees for the events?
                </div>
                <div className="collapse-content">
                  <p>
                    The registration fees, if applicable, will be mentioned on
                    each event's page. Some events may be free to enter, while
                    others might have a nominal registration fee to cover event
                    expenses.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300 text-white">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Are there any registration fees for the events?
                </div>
                <div className="collapse-content">
                  <p>
                    The registration fees, if applicable, will be mentioned on
                    each event's page. Some events may be free to enter, while
                    others might have a nominal registration fee to cover event
                    expenses.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300 text-white">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  What are the prizes for winning these events?
                </div>
                <div className="collapse-content">
                  <p>
                    We offer exciting prizes for the winners, including
                    exclusive toy car collections, gift vouchers, and even a
                    chance to feature their designs on our website. Each event's
                    page will detail the specific prizes on offer.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300 text-white">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Can I participate in multiple events?
                </div>
                <div className="collapse-content">
                  <p>
                    Absolutely! We encourage participants to join as many events
                    as they are eligible for and interested in. Spread the joy
                    of toy car enthusiasm!
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="card flex-shrink-0 md:w-1/3 shadow-2xl bg-rd-900 my-custom-gradient bg-[#ffffff55]">
              <form onSubmit={handleEmailForm} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold ">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    required
                    className="input input-bordered border-[#172554] text-white font-bold bg-[#10101097]"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">Event Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Event Name"
                    required
                    className="input input-bordered border-[#172554] text-white font-bold bg-[#10101097]"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">Message</span>
                  </label>
                  <textarea
                    className="textarea border-[#172554] text-white font-bold bg-[#10101097]"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#172554b2] text-white border-0">Book A Event</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualEvents;
