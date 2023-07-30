
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center mt-24">
            <p className="text-yellow-300">---- {subHeading} ----</p>
            <h3 className="text-3xl uppercase border-y-2 py-2 mt-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;