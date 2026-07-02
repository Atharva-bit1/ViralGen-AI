from app.database.mongodb import mongodb


def users_collection():
    return mongodb.database["users"]


def campaigns_collection():
    return mongodb.database["campaigns"]


def generated_assets_collection():
    return mongodb.database["generated_assets"]


def notifications_collection():
    return mongodb.database["notifications"]

def campaigns_collection():
    return mongodb.database["campaigns"]

def settings_collection():
    return mongodb.database["settings"]