export default function VC3Stories() {
  return (
    <div className="bg-[#FCFAFF] desktop:p-24 mobile:px-4 mobile:py-12" style={{ borderBottom: "1px solid black" }}>
      <h2
        style={{
          fontSize: "calc(20px + 3vmin)",
          fontWeight: "500",
          color: "#4470B6",
          marginBottom: "1.5rem",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        Success Stories
      </h2>
      <div className="flex desktop:flex-row mobile:flex-col justify-around items-center max-w-[1280px] mx-auto">
        <div className="desktop:w-1/2 mobile:w-full mb-8 desktop:mb-0">
          <img src="/logo_se.png" alt="SE" className="max-w-full h-auto mx-auto" />
        </div>
        <div className="desktop:w-1/2 mobile:w-full">
          <img src="/logo_skybox.png" alt="Skybox" className="max-w-full h-auto mx-auto" />
        </div>
      </div>
    </div>
  );
}