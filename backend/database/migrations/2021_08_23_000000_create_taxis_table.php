<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxisTable extends Migration
{
    public function up()
    {
        Schema::create('taxis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_taxi")->nullable();
            $table->string

("id_taxista")->nullable();
            $table->string

("licencia_taxi")->nullable();
            $table->string

("tipo")->nullable();
            $table->string

("preferencias")->nullable();
            $table->string

("matricula")->nullable();
            $table->string

("marca")->nullable();
            $table->string

("modelo")->nullable();
            $table->integer

("año")->nullable();
            $table->string

("color")->nullable();
            $table->enum
("estado", ["Activo","Mantenimiento","Baja"],)->nullable();
            $table->integer

("ubicacion_actual")->nullable();
            $table->timestamp

("ultima_actualizacion")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('taxis');
    }
}

