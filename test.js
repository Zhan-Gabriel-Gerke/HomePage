db.users.find(
    {
        posts: {
            $elemMatch: {
                title:"javascript"
            }
        }
    }
)