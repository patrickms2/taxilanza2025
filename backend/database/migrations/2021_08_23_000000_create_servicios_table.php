<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiciosTable extends Migration
{
    public function up()
    {
        Schema::create('servicios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_servicio")->nullable();
            $table->enum
("tipo_servicio", ["Recogida Hotel","Reserva con pago"],)->nullable();
            $table->timestamp

("fecha_solicitud")->nullable();
            $table->timestamp

("fecha_reserva")->nullable();
            $table->enum
("estado_servicio", ["Pendiente","Confirmado","Cancelado"],)->nullable();
            $table->string

("id_cliente")->nullable();
            $table->string

("id_taxista")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('servicios');
    }
}

