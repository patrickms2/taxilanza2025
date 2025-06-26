<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagosTable extends Migration
{
    public function up()
    {
        Schema::create('pagos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_pago")->nullable();
            $table->string

("id_servicio")->nullable();
            $table->decimal

("monto")->nullable();
            $table->enum
("estado_pago", ["Pagado","Pendiente","Depósito"],)->nullable();
            $table->timestamp

("fecha_pago")->nullable();
            $table->enum
("metodo_pago", ["Tarjeta","Transferencia","Efectivo"],)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pagos');
    }
}

