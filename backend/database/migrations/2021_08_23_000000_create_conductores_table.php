<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConductoresTable extends Migration
{
    public function up()
    {
        Schema::create('conductores', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_conductor")->nullable();
            $table->string

("id_taxista")->nullable();
            $table->string

("nombre")->nullable();
            $table->string

("apellidos")->nullable();
            $table->string

("tel")->nullable();
            $table->date

("f_entrada")->nullable();
            $table->date

("f_salida")->nullable();
            $table->string

("dni")->nullable();
            $table->date

("fecha_nacimiento")->nullable();
            $table->string

("licencia_conducir")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('conductores');
    }
}

