package org.acme.rest

import java.util.*
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/greeting")
class GreetingResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun hello() =
            listOf(Greeting("Alô"))

}