package com.flixmobility.server.exceptions

class NotFoundException(override var message:String): RuntimeException(message)