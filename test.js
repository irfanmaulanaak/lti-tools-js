const axios = require('axios');

async function main() {
    const mahasiswaRes = await axios.get(
        "https://lti.akses.my.id/api/data?resource_link_id=10&lis_course_section_sourcedid=10001",
    )

    console.log(mahasiswaRes.data.length);

}

main();
