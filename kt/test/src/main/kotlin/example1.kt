import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.TransactionManager
import org.jetbrains.exposed.sql.transactions.transaction
import java.sql.Connection

fun connect() {
    Database.connect("jdbc:oracle:thin:@exaserver03.pgj.rj.gov.br:1521:desenv", user = "MGPE_EXJ", password = "MGPE_EXJ_DES",driver = "oracle.jdbc.OracleDriver")
    TransactionManager.manager.defaultIsolationLevel = Connection.TRANSACTION_SERIALIZABLE // Or Connection.TRANSACTION_READ_COMMITTED
}


fun main(args: Array<String>) {
    //an example connection to H2 DB
    connect()

    transaction {

        // print sql to std-out
        addLogger(StdOutSqlLogger)

        // 'select *' SQL: SELECT Cities.id, Cities.name FROM Cities

        println("Documentos: ${Documentos.selectAll().count()}")
    }
}

object Documentos: Table("MCPR_DOCUMENTO") {
    val id = integer("docu_dk")
    val numero = varchar("docu_nr_mp", length = 50)
}


