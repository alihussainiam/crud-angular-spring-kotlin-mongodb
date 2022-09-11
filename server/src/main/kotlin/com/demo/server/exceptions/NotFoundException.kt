package com.demo.server.exceptions

class NotFoundException(override var message:String): RuntimeException(message)