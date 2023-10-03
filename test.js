const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    try {
        await page.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page.setViewport({
            width: 1200,
            height: 800,
        })

        await page.waitForSelector('.form-container', { timeout: 2000 });
        const formExists = await page.$eval('.form-container', form => form !== null);
        // console.log(formExists)
        if (formExists)
            console.log('TESTCASE:should_display_the_booking_form_and_its_elements:success');
        else
            console.log('TESTCASE:should_display_the_booking_form_and_its_elements:failure')
    }
    catch (e) {
        console.log('TESTCASE:should_display_the_booking_form_and_its_elements:failure');
    }

    const page1 = await browser.newPage();
    try {
        await page1.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page1.setViewport({
            width: 1200,
            height: 800,
        })
        await page1.waitForSelector('form', { timeout: 2000 });
        await page1.type('#name', 'John Doe');
        await page1.type('#email', 'johndoe@example.com');
        await page1.type('#passengers', '2');
        await page1.select('#seatType', 'standard');
        await page1.select('#busType', 'sleeper');
        await page1.select('#gender', 'male');
        await page1.click('button[type="submit"]');
        await page1.waitForSelector('.success-message', { timeout: 2000 });
        const successMessage = await page1.$eval('.success-message', message => message.textContent);
        // console.log(successMessage)
        if (successMessage.includes('Booking successful'))
            console.log('TESTCASE:should_submit_the_booking_form_successfully_with_all_elements:success');
        else
            console.log('TESTCASE:should_submit_the_booking_form_successfully_with_all_elements:failure')
    }
    catch (e) {
        console.log('TESTCASE:should_submit_the_booking_form_successfully_with_all_elements:failure');
    }

    const page2 = await browser.newPage();
    try {
        await page2.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page2.setViewport({
            width: 1200,
            height: 800,
        })
        await page2.waitForSelector('form', { timeout: 2000 });
        await page2.click('button[type="submit"]');
        const submitButton = await page2.$eval('button[type="submit"]', button => button.disabled);
        // console.log(submitButton);
        if (submitButton)
            console.log('TESTCASE:should_disable_the_submit_button_for_invalid_data:success');
        else
            console.log('TESTCASE:should_disable_the_submit_button_for_invalid_data:failure')
    }
    catch (e) {
        console.log('TESTCASE:should_disable_the_submit_button_for_invalid_data:failure');
    }

    const page3 = await browser.newPage();
    try {
        await page3.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page3.setViewport({
            width: 1200,
            height: 800,
        })
        await page3.waitForSelector('form', { timeout: 2000 });
        await page3.type('#name', '');
        await page3.click('button[type="submit"]');
        const nameError = await page3.$eval('.error-message', error => error.textContent);
        // console.log(nameError)   Name is required. 
        console.log('TESTCASE:should_submit_the_name_error_successfully:success');
    }
    catch (e) {
        console.log('TESTCASE:should_submit_the_name_error_successfully:failure');
    }

    const page4 = await browser.newPage();
    try {
        await page4.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page4.setViewport({
            width: 1200,
            height: 800,
        })
        await page4.waitForSelector('form', { timeout: 2000 });
        await page4.type('#email', '');
        await page4.click('button[type="submit"]');
        const emailError = await page4.$eval('.error-message', error => error.textContent);
        // console.log(nameError)   Email is required. 
        console.log('TESTCASE:should_submit_the_email_error_successfully:success');
    }
    catch (e) {
        console.log('TESTCASE:should_submit_the_email_error_successfully:failure');
    }

    const page5 = await browser.newPage();
    try {
        await page5.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page5.setViewport({
            width: 1200,
            height: 800,
        })
        await page5.waitForSelector('form', { timeout: 2000 });
        await page5.type('#name', 'John Doe');
        await page5.type('#email', 'johndoe@example.com');
        await page5.click('button[type="reset"]');
        const nameFieldValue = await page5.$eval('#name', input => input.value);
        const emailFieldValue = await page5.$eval('#email', input => input.value);
        // console.log(nameFieldValue == '')
        // console.log(emailFieldValue == '')
        if ((nameFieldValue == '') && (emailFieldValue == ''))
            console.log('TESTCASE:should_reset_the_form_when_the_Reset_button_is_clicked:success');
        else
            console.log('TESTCASE:should_reset_the_form_when_the_Reset_button_is_clicked:failure')
    }
    catch (e) {
        console.log('TESTCASE:should_reset_the_form_when_the_Reset_button_is_clicked:failure');
    }

    const page6 = await browser.newPage();
    try {
        await page6.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page6.setViewport({
            width: 1200,
            height: 800,
        })
        await page6.waitForSelector('form', { timeout: 2000 });
        await page6.type('#passengers', '0');
        await page6.type('#name', 'John Doe');

        // await page6.click('button[type="submit"]');

        const passengersError = await page6.$eval('.error-message', error => error.textContent,{timeout:2000});
        // console.log(passengersError) Minimum number of passengers is 1.
        if (passengersError.includes('Minimum number of passengers is 1.'))
            console.log('TESTCASE:should_display_a_minimum_passengers_validation_error:success');
        else
            console.log('TESTCASE:should_display_a_minimum_passengers_validation_error:failure')
    }
    catch (e) {
        console.log('TESTCASE:should_display_a_minimum_passengers_validation_error:failure');
    }

    const page7 = await browser.newPage();
    try {
        await page7.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page7.setViewport({
            width: 1200,
            height: 800,
        })
        await page7.waitForSelector('.form-container', { timeout: 2000 });
        await page7.select('#gender', 'female');
        await page7.click('button[type="submit"]');
        await page1.waitForSelector('.success-message', { timeout: 2000 });
        const successMessage = await page1.$eval('.success-message', message => message.textContent);
        // console.log(successMessage)
        if (successMessage.includes('Booking successful'))
            console.log('TESTCASE:should_select_and_submit_gender:success');
        else
            console.log('TESTCASE:should_select_and_submit_gender:failure')
    }
    catch (e) {
        console.log('TESTCASE:should_select_and_submit_gender:failure');
    }

    const page8 = await browser.newPage();
    try {
        await page8.goto('https://8081-fcebccfce305709023cfebcdbaadceececfbfour.premiumproject.examly.io/');
        await page8.setViewport({
            width: 1200,
            height: 800,
        })
        await page8.waitForSelector('.form-container',{timeout:2000});
        await page8.select('#seatType', 'premium');
        await page8.select('#busType', 'volvo');
        await page8.click('button[type="submit"]');
        await page1.waitForSelector('.success-message',{timeout:2000});
        const successMessage = await page1.$eval('.success-message', message => message.textContent);
        // console.log(successMessage)
        if (successMessage.includes('Booking successful'))
            console.log('TESTCASE:should_select_and_submit_seat_type_and_bus_type:success');
        else
            console.log('TESTCASE:should_select_and_submit_seat_type_and_bus_type:failure')
    }
    catch (e) {
        console.log('TESTCASE:should_select_and_submit_seat_type_and_bus_type:failure');
    }

    finally {
        await page.close();
        await page1.close();
        await page2.close();
        await page3.close();
        await page4.close();
        await page5.close();
        await page6.close();
        await page7.close();
        await page8.close();
        await browser.close();
    }
})();