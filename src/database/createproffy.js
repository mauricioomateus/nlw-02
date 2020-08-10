module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    // insert data in table 'proffys'
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        );
    `)

    const proffy_id = insertedProffy.lastID

    //insert data in table classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                ${classValue.subject},
                ${classValue.cost},
                ${proffy_id}
            );
    `)

    const class_id = insertedClass.lastID

    //insert data in table class_schedule
    const insertedAllClassSchedulValues = classScheduleValues.map( (value) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from
                time_to
            ) VALUES (
                ${class_id},
                ${values.weekday},
                ${values.time_from},
                ${values.time_to}
            );
        `)
    })

    // Execute all db.run()
    await Promise.all(insertedAllClassSchedulValues)
} 